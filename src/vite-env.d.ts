/// <reference types="vite/client" />

import { IRouteRaw } from "./routes";

declare module 'react-router/dist/lib/context' {
  export declare type RouteObject = IndexRouteObject | NonIndexRouteObject | IRouteRaw;
}