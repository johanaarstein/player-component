import { LitElement } from 'lit';
import type { CSSResult, TemplateResult } from 'lit';
import type { AnimationItem, AnimationDirection, RendererType } from 'lottie-web';
import { PlayMode, PlayerState } from './types';
import type { Autoplay, Controls, Loop, ObjectFit, PreserveAspectRatio } from './types';
export declare class DotLottiePlayer extends LitElement {
    autoplay: Autoplay;
    background?: string;
    controls: Controls;
    count?: number;
    currentState: PlayerState;
    description?: string;
    direction: AnimationDirection;
    hover: boolean;
    intermission: number;
    loop: Loop;
    mode: PlayMode;
    objectfit: ObjectFit;
    preserveAspectRatio?: PreserveAspectRatio;
    ref?: any;
    renderer: RendererType;
    seeker?: number;
    speed?: number;
    src: string;
    protected container: HTMLElement;
    private _io?;
    private _lottie;
    private _prevState?;
    private _counter;
    load(src: string | Record<string, any>): Promise<void>;
    private _onVisibilityChange;
    private _handleSeekChange;
    private isLottie;
    getLottie(): AnimationItem | null;
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
    seek(value: number | string): void;
    snapshot(download?: boolean): string | void;
    private freeze;
    reload(): Promise<void>;
    setSpeed(value?: number): void;
    setDirection(value: number): void;
    setLooping(value: boolean): void;
    togglePlay(): void;
    toggleLooping(): void;
    static get styles(): CSSResult;
    connectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    disconnectedCallback(): void;
    protected renderControls(): TemplateResult<1>;
    protected render(): TemplateResult | void;
}
//# sourceMappingURL=index.d.ts.map