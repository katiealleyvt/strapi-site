import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {color?: string}
  >(({ className, color, ...props }, ref) => {
   
  return(
  <div
    ref={ref}
    className={cn(
      `rounded-lg shadow-sm hover:shadow-xl transition bg-${color}`,
      className
    )}
    {...props}
  />);
});
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { color?: string }
  >(({ className, color, ...props }, ref) => {
   
    const classStr = `text-2xl font-semibold leading-none tracking-tight text-${color}`
  return(
  <h3
    ref={ref}
    className={cn(
      classStr,
      className
    )}
    style={{ color }}
    {...props}
  />);
});
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { color?: string }
>(({ className, color, ...props }, ref) => {
 

  return (
    <p
      ref={ref}
      className={cn(`text-sm text-${color}`, className)}
      {...props}
    />
    );
});
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { color?: string }
>(({ className, color, ...props }, ref) => (
  <div ref={ref} className={cn(`p-6 pt-0 text-${color}`, className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
