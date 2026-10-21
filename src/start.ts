import { createStart } from "@tanstack/react-start";

// Keep only the framework's required Start instance; this site has no server middleware.
export const startInstance = createStart(() => ({}));
