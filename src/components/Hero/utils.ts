import type { Zone, Sprite } from './types';
import type { AnimationSettings } from '@/contexts/HeroAnimationContext';

// Helper: Measure text dimensions
export const measureText = (text: string, fontSizeRem: number): { width: number; height: number } => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return { width: 0, height: 0 };

  // Convert rem to px (assuming 16px base)
  const fontSizePx = fontSizeRem * 16;
  ctx.font = `bold ${fontSizePx}px sans-serif`;

  const metrics = ctx.measureText(text);

  return {
    width: metrics.width,
    height: fontSizePx, // Approximate height
  };
};

// Calculate dynamic zones based on container size and base zone size (px)
export const calculateZones = (
  width: number,
  height: number,
  animationSettings: AnimationSettings,
  baseZoneSize: { width: number; height: number } | null
): Zone[] => {
  const { debugLogs } = animationSettings;

  if (!baseZoneSize) return [];

  const { width: baseWidth, height: baseHeight } = baseZoneSize;

  // Calculate grid with overflow (140% = -20% to 120%)
  const overflowWidth = width * 1.4;
  const overflowHeight = height * 1.4;

  let cols = Math.floor(overflowWidth / baseWidth);
  let rows = Math.floor(overflowHeight / baseHeight);

  // Minimum 2x2 guarantee
  cols = Math.max(2, cols);
  rows = Math.max(2, rows);

  const totalZones = cols * rows;

  // Zone sizes in px
  const zoneWidth = overflowWidth / cols;
  const zoneHeight = overflowHeight / rows;

  // Overflow offset (-20%)
  const offsetX = -width * 0.2;
  const offsetY = -height * 0.2;

  if (debugLogs) {
    console.log('[HERO] Zone grid calculated:', {
      container: { width, height },
      baseZone: baseZoneSize,
      grid: { cols, rows },
      totalZones,
      zoneSize: { width: `${zoneWidth.toFixed(2)}px`, height: `${zoneHeight.toFixed(2)}px` }
    });
  }

  // Create zones (px)
  const newZones: Zone[] = [];
  for (let i = 0; i < totalZones; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);

    newZones.push({
      id: i,
      x: offsetX + col * zoneWidth,
      y: offsetY + row * zoneHeight,
      width: zoneWidth,
      height: zoneHeight,
      sprite: null,
    });
  }

  return newZones;
};

// Create a sprite in available zone (px)
export const createSpriteInZone = (
  text: string,
  zone: Zone,
  delay: number = 0,
  animationSettings: AnimationSettings
): Sprite => {
  const { fontSize, maxMovementDistance, debugLogs } = animationSettings;

  // 1. Measure text size (px)
  const textSize = measureText(text, fontSize.max);
  const textWidthPx = textSize.width;
  const textHeightPx = textSize.height;

  // 2. Calculate free zone (px) - area where text can fit
  const freeZoneWidth = zone.width - textWidthPx;
  const freeZoneHeight = zone.height - textHeightPx;

  // 3. Random start position (px) within free zone
  const startX = zone.x + Math.random() * freeZoneWidth;
  const startY = zone.y + Math.random() * freeZoneHeight;

  let endX = zone.x + Math.random() * freeZoneWidth;
  let endY = zone.y + Math.random() * freeZoneHeight;

  const difX = Math.abs(endX - startX);
  if (difX > maxMovementDistance) {
    endX = startX > endX ? startX - maxMovementDistance : startX + maxMovementDistance;
  } else if (difX < 10) {
    endX = startX > endX ? startX - 10 : startX + 10;
  }

  const difY = Math.abs(endY - startY);
  if (difY > maxMovementDistance) {
    endY = startY > endY ? startY - maxMovementDistance : startY + maxMovementDistance;
  } else if (difY < 10) {
    endY = startY > endY ? startY - 10 : startY + 10;
  }

  const sprite: Sprite = {
    id: `${text}-${Date.now()}-${zone.id}`,
    text,
    zoneId: zone.id,
    startX,
    startY,
    endX,
    endY,
    fontFamily: 'inherit',
    fontSizeStart: fontSize.min + Math.random() * 0.5,
    fontSizeTop: fontSize.max - Math.random() * 0.5,
    fontSizeEnd: fontSize.min + Math.random() * 0.5,
    rotation: 0, // No rotation
    duration: animationSettings.duration,
    delay,
    isActive: true,
  };

  if (debugLogs) {
    console.log('[SPRITE] Created:', JSON.stringify({
      id: sprite.id,
      text: sprite.text,
      zone: sprite.zoneId,
      position: {
        start: { x: startX.toFixed(2), y: startY.toFixed(2) },
        end: { x: endX.toFixed(2), y: endY.toFixed(2) }
      },
      duration: sprite.duration,
      delay: sprite.delay
    }, null, 2));
  }

  return sprite;
};
