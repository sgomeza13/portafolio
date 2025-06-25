import { cn } from "@/lib/util";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * A card header component.
 *
 * @remarks
 * This component renders a card header with bold font, a larger font size, and a horizontal line below it.
 * The line is omitted if `hasBorder` is `false`.
 *
 * @param props - The props for the component.
 * @param props.children - The contents of the card header.
 * @param props.className - Additional CSS classes to apply to the component.
 * @param props.hasBorder - Whether to render a horizontal line below the header.
 * @param props...otherProps - Any other props will be spread to the outermost `div` element.
 */
function CardHeader({ children, className, hasBorder, ...props }: CardProps) {
  return (
    <>
    <div className={cn("card-header px-4 py-4", className)} {...props}>
      <div className="font-bold text-xl">{children}</div>
    </div>
    {hasBorder && <div className="border-b border-t border-border -mx-4 mt-2" />}
    </>
  );
}

/**
 * A card body component.
 *
 * @remarks
 * This component renders the body of a card with padding and optional custom styles.
 *
 * @param props - The props for the component.
 * @param props.children - The contents of the card body.
 * @param props.className - Additional CSS classes to apply to the component.
 * @param props...otherProps - Any other props will be spread to the outermost `div` element.
 */

function CardBody({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("card-body p-4", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * A card footer component.
 *
 * @remarks
 * This component renders the footer of a card with right-aligned contents and optional custom styles.
 * If `hasBorder` is `true`, a horizontal line is rendered above the footer.
 *
 * @param props - The props for the component.
 * @param props.children - The contents of the card footer.
 * @param props.className - Additional CSS classes to apply to the component.
 * @param props.hasBorder - Whether to render a horizontal line above the footer.
 * @param props...otherProps - Any other props will be spread to the outermost `div` element.
 */
function CardFooter({ children, className, hasBorder, ...props }: CardProps) {
  return (
    <div {...props}>
      {hasBorder && <div className="border-t border-border -mx-4 mb-2" />}
      <div  className={cn("card-footer", className)}>
        {children}
      </div>
    </div>
  );
}

/**
 * A card component.
 *
 * @remarks
 * This component renders a card with an optional header, body, and footer.
 * The header and footer can be omitted by not providing the `header` and
 * `footer` props, respectively. The body is always rendered.
 * If `hasBorder` is `true`, a border is rendered around the card.
 * The `className` prop can be used to add additional CSS classes to the outermost
 * `div` element.
 *
 * @param props - The props for the component.
 * @param props.children - The contents of the card body.
 * @param props.header - The contents of the card header.
 * @param props.footer - The contents of the card footer.
 * @param props.className - Additional CSS classes to apply to the component.
 * @param props.hasBorder - Whether to render a border around the card.
 * @param props...otherProps - Any other props will be spread to the outermost `div` element.
 */
function Card({ children, className, hasBorder, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card rounded-xl overflow-hidden",
        hasBorder && "border border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}


export { Card, CardHeader, CardFooter, CardBody };