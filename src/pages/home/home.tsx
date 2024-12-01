import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import image from '../../assets/124599.jpeg'

const Home:React.FC = () => {
  return (
    <div className='px-4 py-8 flex-grow'>
        <div className='mx-auto flex flex-col md:flex-row gap-8'>
            <section>
              {/* აქ უნდა იყოს ქარდები  */}
            </section>
            <aside className="md:w-1/3 space-y-8">
            <Card className="rounded-xl border text-card-foreground shadow">
              <CardHeader>
                <div className='text-center text-xl'>Rating</div>
              </CardHeader>
              <CardContent>
              <div className="p-6 pt-0">
                        <ul className="space-y-4">
          
                            <li>
                              <div className="flex items-center">
                                <span >
                                  <Avatar >
                                    <AvatarImage className="rounded-full h-10 w-10" src={image}/>
                                  </Avatar>
                                </span>
                                <div className="ml-4">
                                    <div className="p-0" >name</div>
                                </div>
                              </div>
                            </li>
                        
                            <li>
                              <div className="flex items-center">
                                <span >
                                  <Avatar >
                                    <AvatarImage className="rounded-full h-10 w-10" src={image}/>
                                  </Avatar>
                                </span>
                                <div className="ml-4">
                                    <div className="p-0" >name</div>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="flex items-center">
                                <span >
                                  <Avatar >
                                    <AvatarImage className="rounded-full h-10 w-10" src={image}/>
                                  </Avatar>
                                </span>
                                <div className="ml-4">
                                    <div className="p-0" >name</div>
                                </div>
                              </div>
                            </li>

                        </ul>
                    </div>
              </CardContent>
            </Card>
            </aside>
        </div>
    </div>
  )
}

export default Home