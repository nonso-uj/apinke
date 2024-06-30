

const Testimonial = () => {

  const chefImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="z-20 w-full h-fit space-y-16 flex flex-col overflow-hidden my-16">
          <p className="text-4xl lg:text-5xl font-bold font_bold text-black text-center">Testimonials</p>

          <div className="w-fit py-14 ml-10 grow grid grid-flow-col auto-cols-max items-center justify-start gap-x-14 testimonial-slides">
            {
              chefImages.map((num :any, i: any) => (
                <div key={i+num} className="single-testimonial w-80 lg:w-96 hover:scale-125 duration-500">
                  <div className="round-1 round"></div>
                  <div className="round-2 round"></div>
                  <p className="p-8 pt-10 lg:p-12 text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <div className="client-info">
                    <div className="client-details">
                      <h6>Yeasin Arafat</h6>
                      <span>Designer, LLCG Team</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
  )
}

export default Testimonial