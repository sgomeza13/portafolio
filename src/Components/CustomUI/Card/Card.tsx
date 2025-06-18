import { cn } from "@/lib/util";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <>
    <div className={cn("card-header px-4 pt-4 pb-2", className)} {...props}>
      <div className="font-bold text-xl">{children}</div>
    </div>
    <div className="border-b border-gray-200 dark:border-gray-700 -mx-4 mt-2" />
    </>
  );
}

function CardBody({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("card-body p-4", className)} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("card-footer", className)} {...props}>
      <div className="border-t border-gray-200 dark:border-gray-700 -mx-4 mb-2" />
      <div className="flex justify-end px-4 pt-4">
        {children}
      </div>
    </div>
  );
}

function Card({ children, header, footer, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700",
        className
      )}
      {...props}
    >
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </div>
  );
}

export { Card, CardHeader, CardFooter, CardBody };