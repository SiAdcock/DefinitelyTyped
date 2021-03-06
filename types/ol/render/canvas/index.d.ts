import { ColorLike } from 'ol/colorlike';
import LRUCache from 'ol/structs/LRUCache';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { Transform } from 'ol/transform';
export function drawImage(context: CanvasRenderingContext2D, transform: Transform, opacity: number, image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, originX: number, originY: number, w: number, h: number, x: number, y: number, scale: number): void;
export function measureTextWidth(font: string, text: string): number;
export function rotateAtOffset(context: CanvasRenderingContext2D, rotation: number, offsetX: number, offsetY: number): void;
export type DeclutterGroup = any[];
export interface FillState {
    fillStyle: ColorLike;
}
export interface FillStrokeState {
    currentFillStyle?: ColorLike;
    currentStrokeStyle?: ColorLike;
    currentLineCap?: string;
    currentLineDash: number[];
    currentLineDashOffset?: number;
    currentLineJoin?: string;
    currentLineWidth?: number;
    currentMiterLimit?: number;
    lastStroke?: number;
    fillStyle?: ColorLike;
    strokeStyle?: ColorLike;
    lineCap?: string;
    lineDash: number[];
    lineDashOffset?: number;
    lineJoin?: string;
    lineWidth?: number;
    miterLimit?: number;
}
export const labelCache: LRUCache<HTMLCanvasElement>;
export interface StrokeState {
    lineCap: string;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: string;
    lineWidth: number;
    miterLimit: number;
    strokeStyle: ColorLike;
}
export interface TextState {
    font: string;
    textAlign?: string;
    textBaseline: string;
    placement?: string;
    maxAngle?: number;
    overflow?: boolean;
    backgroundFill?: Fill;
    backgroundStroke?: Stroke;
    scale?: number;
    padding?: number[];
}
