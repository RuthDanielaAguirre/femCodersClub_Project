import { Card } from 'flowbite-react'


const Components = () => {
  return (
    <>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Esto es 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      una prueba de cómo se vería
      </p>
    </Card>
    </>
  )
}

export default Components