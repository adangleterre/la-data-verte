interface PageTitleProps {
  title: string,
}

function PageTitle({ title }: PageTitleProps)  {
  return (
    <h2 className='text-2xl md:text-3xl text-center text-green-900 font-bold my-12'>{title}</h2>
  )
}

export default PageTitle