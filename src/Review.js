import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkArrayLength = (length) => {
    if(length > people.length - 1 ) {
      return 0
    }
    if(length < 0 ) {
      return people.length - 1
    }
    return length
  }

  const nextPerson = ()  => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkArrayLength(newIndex)
    })
  }

  const prevPerson = ()  => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkArrayLength(newIndex)
    })
  }


  return (
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button onClick={prevPerson} className='prev-btn'>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson} className='next-btn'>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn'>
          surprise me
        </button>
      </article>
  )
};

export default Review;
