import React from 'react'

const Biography = ({imageUrl}) => {
  return (
      <div className="container biography">
        <div className="banner">
            <img src={imageUrl} alt="Bio" />
        </div>
        <div className="banner">
            <p>BioGraphy</p>
            <h3>Who We are</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam vero dolorem odit fugiat, impedit dicta iste dolores nisi eos repudiandae? Dolorem beatae molestiae distinctio explicabo iste incidunt ipsum, quod impedit provident ipsam. Architecto cumque hic delectus itaque magni corporis facilis, fugit quaerat, ab assumenda temporibus quisquam distinctio totam repellat!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda ea non amet expedita nihil praesentium ullam qui temporibus ab eligendi, rem et laborum cupiditate voluptas voluptatum ipsa odit maiores asperiores cum quam voluptatibus ipsam?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed hic porro?</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
  )
}

export default Biography
