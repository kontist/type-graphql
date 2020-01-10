import { ResolverClassMetadata, BaseResolverMetadata, MiddlewareMetadata, FieldResolverMetadata, ExtensionsClassMetadata, ExtensionsFieldMetadata } from "./definitions";
import { Middleware } from "../interfaces/Middleware";
export declare function mapSuperResolverHandlers<T extends BaseResolverMetadata>(definitions: T[], superResolver: Function, resolverMetadata: ResolverClassMetadata): T[];
export declare function mapSuperFieldResolverHandlers(definitions: FieldResolverMetadata[], superResolver: Function, resolverMetadata: ResolverClassMetadata): FieldResolverMetadata[];
export declare function mapMiddlewareMetadataToArray(metadata: MiddlewareMetadata[]): Array<Middleware<any>>;
export declare function ensureReflectMetadataExists(): void;
export declare function flattenExtensions(extensions: Record<string, any>, entry: ExtensionsClassMetadata | ExtensionsFieldMetadata): Record<string, any>;
