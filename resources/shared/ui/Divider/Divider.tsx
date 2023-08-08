import React from "react";
import { DefaultProps } from "resources/shared/types/helpers";

export const Divider = React.memo<DefaultProps>(
    ({ className }) => <div className={`divider ${className}`} />
)