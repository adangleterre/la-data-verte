interface PageTitleProps {
  title: string,
}

function PageTitle({ title }: PageTitleProps)  {
  return (
    <h2 className='container text-2xl md:text-3xl text-center text-green-900 font-bold my-16 md:my-24'>{title}</h2>
  )
}

export default PageTitle