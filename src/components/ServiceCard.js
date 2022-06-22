import React from 'react';
import Service from './Service';

// const ServiceItems = [
//     {
//         id:1,
//         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWXYsqmCdVaF_qy_Oe3KCJOqpIWFNnXLZuLYkWufdeyGyGx4C',
//         title:'ARCHITECTURE',
//         desc:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
//     },
//     {
//         id:2,
//         image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsLSuWIyeZFZzoywc-wcnBnsb2jlF8rrv1Cdbp6gsQZyT4Hj80',
//         title:'PLANNING',
//         desc:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
//     },
//     {
//         id:3,
//         image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHsuNywuD-gKPa7CdE24XkQWIYr7mc0qebo-7T4lXVtkLx3R-F',
//         title:'INTERIOR DESIGN',
//         desc:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
//     },
//     {
//         id:4,
//         image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgtcnhj4jYiZpMLOWGzD3biklbmOg_LZrZDCY7dVGR-Q7Xd3kg',
//         title:'LANDSCAPE',
//         desc:'Sample text. Click to select the text box. Click again or double click to start editing the text.'
//     }
// ]

function ServiceCard() {
	return (
		<div className="">
			<div className="flex  items-center space-x-[10px] pl-3
           sm:pl-9 md:pl-12 lg:pl-[125px] xl:pl-28 pt-14">
				<img
					className="h-6 w-6 sm:h-7 sm:w-7 md:h-5 md:w-5 "
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAfZJREFUeF7t2LsRgDAQxNC7/os2wyeiBT0Sx0Ya2N2d9znf6Wi9gV3wW8T/tyVAm/8QgAD+/2UHfAHK9Gf8AuL8CUAAG0DaARkgjV8GiOMnAAFMwW0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzv8R4H5O/UVE778XAqWAAyqCLhUAAAAASUVORK5CYII="
					alt=""
				/>
				<p className="roboto font-bold sm:text-[32px] md:text-[20px] service">Our Services</p>
			</div>
			<div className="">
				<Service />
			</div>
		</div>
	);
}

export default ServiceCard;
