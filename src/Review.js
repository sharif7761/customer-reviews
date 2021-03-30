import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkArrayLength = (personNumber) => {
    if(personNumber > people.length - 1 ) {
      return 0
    }
    if(personNumber < 0 ) {
      return people.length - 1
    }
    return personNumber
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

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if(randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkArrayLength(randomNumber))
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
        <button onClick={randomPerson} className='random-btn'>
          surprise me
        </button>
      </article>
  )
};

export default Review;
