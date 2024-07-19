import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

export function PageSelect () {
  return (
    <>
      <div className='p-4 bg-sky-900'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='text-lg' href='#' isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='text-lg' href='#'>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='text-lg' href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}
