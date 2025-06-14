import { ReactNode, isValidElement } from "react";

/**
 * Extracts the text content from the given React children.
 *
 * @param {ReactNode} children The React children to extract the text content from.
 * @returns {string} The extracted text content.
 */
export function getTextContent(children: ReactNode): string {
  if (children == null) return "";

  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getTextContent).join("");
  }

  if (isValidElement(children)) {
    return getTextContent(
      (
        (children as React.ReactElement)
          .props as React.PropsWithChildren<unknown>
      ).children as React.ReactNode
    );
  }

  return "";
}
