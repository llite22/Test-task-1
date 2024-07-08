declare module "*.svg?react" {
    import React from "react";
    type SVGComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    const ReactComponent: SVGComponent;
    export default ReactComponent;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }