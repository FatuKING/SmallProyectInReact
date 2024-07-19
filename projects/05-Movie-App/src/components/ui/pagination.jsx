import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon
} from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(buttonVariants({
      variant: isActive ? 'outline' : 'ghost',
      size
    }), className)}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cn('gap-1 text-lg pl-2.5', className)}
    {...props}
  >
    <ChevronLeftIcon className='h-5 w-5' />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 text-lg pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className='h-5 w-5' />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 text-white items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className='h-5 w-5' />
    <span className='sr-only'>More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
}
