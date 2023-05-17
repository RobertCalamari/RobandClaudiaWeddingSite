import React from 'react';
import {useEffect} from 'react';
import './css/Pictures.css';
import CollagePic from './components/CollagePic';
import cPic1 from './img/finalpics/pics (1).jpg';
import cPic2 from './img/finalpics/pics (2).jpg';
import cPic3 from './img/finalpics/pics (3).jpg';
import cPic4 from './img/finalpics/pics (4).jpg';
import cPic5 from './img/finalpics/pics (5).jpg';
import cPic6 from './img/finalpics/pics (6).jpg';
import cPic7 from './img/finalpics/pics (7).jpg';
import cPic8 from './img/finalpics/pics (8).jpg';
import cPic9 from './img/finalpics/pics (9).jpg';
import cPic10 from './img/finalpics/pics (10).jpg';
import cPic11 from './img/finalpics/pics (11).jpg';
import cPic12 from './img/finalpics/pics (12).jpg';
import cPic13 from './img/finalpics/pics (13).jpg';
import cPic14 from './img/finalpics/pics (14).jpg';
import cPic15 from './img/finalpics/pics (15).jpg';
import cPic16 from './img/finalpics/pics (16).jpg';
import cPic17 from './img/finalpics/pics (17).jpg';
import cPic18 from './img/finalpics/pics (18).jpg';
import cPic19 from './img/finalpics/pics (19).jpg';
import cPic20 from './img/finalpics/pics (20).jpg';
import cPic21 from './img/finalpics/pics (21).jpg';
import cPic22 from './img/finalpics/pics (22).jpg';
import cPic23 from './img/finalpics/pics (23).jpg';
import cPic24 from './img/finalpics/pics (24).jpg';
import cPic25 from './img/finalpics/pics (25).jpg';
import cPic26 from './img/finalpics/pics (26).jpg';
import cPic27 from './img/finalpics/pics (27).jpg';
import cPic28 from './img/finalpics/pics (28).jpg';
import cPic29 from './img/finalpics/pics (29).jpg';
import cPic30 from './img/finalpics/pics (30).jpg';
import cPic31 from './img/finalpics/pics (31).jpg';
import cPic32 from './img/finalpics/pics (32).jpg';
import cPic33 from './img/finalpics/pics (33).jpg';
import cPic34 from './img/finalpics/pics (34).jpg';
import cPic35 from './img/finalpics/pics (35).jpg';
import cPic36 from './img/finalpics/pics (36).jpg';
import cPic37 from './img/finalpics/pics (37).jpg';
import cPic38 from './img/finalpics/pics (38).jpg';
import cPic39 from './img/finalpics/pics (39).jpg';
import cPic40 from './img/finalpics/pics (40).jpg';
import cPic41 from './img/finalpics/pics (41).jpg';
import cPic42 from './img/finalpics/pics (42).jpg';
import cPic43 from './img/finalpics/pics (43).jpg';
import cPic44 from './img/finalpics/pics (44).jpg';
import cPic45 from './img/finalpics/pics (45).jpg';
import cPic46 from './img/finalpics/pics (46).jpg';
import cPic47 from './img/finalpics/pics (47).jpg';
import cPic48 from './img/finalpics/pics (48).jpg';

function Pictures(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    const allPics = [cPic1,cPic2,cPic3,cPic4,cPic5,cPic6,cPic7,cPic8,cPic9,cPic10,cPic11,cPic12,cPic13,cPic14,cPic15,cPic16,cPic17,cPic18,cPic19,cPic20,cPic21,cPic22,cPic23,cPic24,cPic25,cPic26,cPic27,cPic28,cPic29,cPic30,cPic31,cPic32,cPic33,cPic34,cPic35,cPic36,cPic37,cPic38,cPic39,cPic40,cPic41,cPic42,cPic43,cPic44,cPic45,cPic46,cPic47,cPic48
    ];

        console.log(allPics);
    
    const picItems = allPics.map((pic, i) => <CollagePic key={pic} newkey={i} pic={pic} />);
    const sortedList = sortImagesByAspectRatio(picItems);
    

    let imgHeights = {};
    allPics.forEach(imgUrl => {
        let img = new Image();
        img.src = imgUrl;
        img.onload = () => imgHeights[imgUrl] = [img.height, img.width];
    })

    console.log(imgHeights);

    return (
        <div className='wrapper'>
            <div className='top-img top-img-pics'></div>
            <div className='collage'>
                <div className='collage-boundary'>
                    {picItems}
                </div>
            </div>


        </div>
    );
}

function sortImagesByAspectRatio(images) {
    // create a new array with objects that store the image and its aspect ratio
    const imagesWithRatio = images.map(img => ({ image: img, ratio: img.width / img.height }));
  
    // sort the array by aspect ratio, with horizontal images first
    imagesWithRatio.sort((a, b) => {
      if (a.ratio > b.ratio) return -1; // vertical image comes after horizontal image
      if (a.ratio < b.ratio) return 1; // horizontal image comes before vertical image
      return 0; // same aspect ratio, keep current order
    });
  
    // extract the sorted images from the objects and return as an array
    return imagesWithRatio.map(obj => obj.image);
  }

export default Pictures;





























import React from 'react';
import {useEffect, useState} from 'react';
import './css/Pictures.css';
import CollagePic from './components/CollagePic';
import cPic1 from './img/finalpics/pics (1).jpg';
import cPic2 from './img/finalpics/pics (2).jpg';
import cPic3 from './img/finalpics/pics (3).jpg';
import cPic4 from './img/finalpics/pics (4).jpg';
import cPic5 from './img/finalpics/pics (5).jpg';
import cPic6 from './img/finalpics/pics (6).jpg';
import cPic7 from './img/finalpics/pics (7).jpg';
import cPic8 from './img/finalpics/pics (8).jpg';
import cPic9 from './img/finalpics/pics (9).jpg';
import cPic10 from './img/finalpics/pics (10).jpg';
import cPic11 from './img/finalpics/pics (11).jpg';
import cPic12 from './img/finalpics/pics (12).jpg';
import cPic13 from './img/finalpics/pics (13).jpg';
import cPic14 from './img/finalpics/pics (14).jpg';
import cPic15 from './img/finalpics/pics (15).jpg';
import cPic16 from './img/finalpics/pics (16).jpg';
import cPic17 from './img/finalpics/pics (17).jpg';
import cPic18 from './img/finalpics/pics (18).jpg';
import cPic19 from './img/finalpics/pics (19).jpg';
import cPic20 from './img/finalpics/pics (20).jpg';
import cPic21 from './img/finalpics/pics (21).jpg';
import cPic22 from './img/finalpics/pics (22).jpg';
import cPic23 from './img/finalpics/pics (23).jpg';
import cPic24 from './img/finalpics/pics (24).jpg';
import cPic25 from './img/finalpics/pics (25).jpg';
import cPic26 from './img/finalpics/pics (26).jpg';
import cPic27 from './img/finalpics/pics (27).jpg';
import cPic28 from './img/finalpics/pics (28).jpg';
import cPic29 from './img/finalpics/pics (29).jpg';
import cPic30 from './img/finalpics/pics (30).jpg';
import cPic31 from './img/finalpics/pics (31).jpg';
import cPic32 from './img/finalpics/pics (32).jpg';
import cPic33 from './img/finalpics/pics (33).jpg';
import cPic34 from './img/finalpics/pics (34).jpg';
import cPic35 from './img/finalpics/pics (35).jpg';
import cPic36 from './img/finalpics/pics (36).jpg';
import cPic37 from './img/finalpics/pics (37).jpg';
import cPic38 from './img/finalpics/pics (38).jpg';
import cPic39 from './img/finalpics/pics (39).jpg';
import cPic40 from './img/finalpics/pics (40).jpg';
import cPic41 from './img/finalpics/pics (41).jpg';
import cPic42 from './img/finalpics/pics (42).jpg';
import cPic43 from './img/finalpics/pics (43).jpg';
import cPic44 from './img/finalpics/pics (44).jpg';
import cPic45 from './img/finalpics/pics (45).jpg';
import cPic46 from './img/finalpics/pics (46).jpg';
import cPic47 from './img/finalpics/pics (47).jpg';
import cPic48 from './img/finalpics/pics (48).jpg';

function Pictures(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    const allPics = [cPic1,cPic2,cPic3,cPic4,cPic5,cPic6,cPic7,cPic8,cPic9,cPic10,cPic11,cPic12,cPic13,cPic14,cPic15,cPic16,cPic17,cPic18,cPic19,cPic20,cPic21,cPic22,cPic23,cPic24,cPic25,cPic26,cPic27,cPic28,cPic29,cPic30,cPic31,cPic32,cPic33,cPic34,cPic35,cPic36,cPic37,cPic38,cPic39,cPic40,cPic41,cPic42,cPic43,cPic44,cPic45,cPic46,cPic47,cPic48
    ];
    let newPics = [];
    console.log(allPics);
    
    // allPics.forEach(imgUrl => {
    //     let img = new Image();
    //     img.src = imgUrl;
        
    //     newPics.push([imgUrl, img.height, img.width]);
    // })

    const verticalPics = [];
    const horizontalPics = [];
    allPics.forEach(imgUrl => {
        let img = new Image();
        img.src = imgUrl;
        const aspectRatio = img.width / img.height;
        if (aspectRatio >= 1) {
        // Image is horizontal or square
        horizontalPics.push([imgUrl, img.height, img.width]);
        } else {
        // Image is vertical
        verticalPics.push([imgUrl, img.height, img.width]);
        }
    });
    

    return (
        <div className='wrapper'>
            <div className='top-img top-img-pics'></div>
            <div className='collage'>
                <div className='collage-boundary'>
                    {verticalPics.map((pic, i) => <CollagePic key={pic[0]} newkey={i} pic={pic[0]} />)}
                    {horizontalPics.map((pic, i) => <CollagePic key={pic[0]} newkey={i} pic={pic[0]} />)}
                </div>
            </div>


        </div>
    );
}

export default Pictures;



































import React from 'react';
import {useEffect, useState} from 'react';
import Collage from "./components/Collage";
import './css/Pictures.css';
import CollagePic from './components/CollagePic';
import cPic1 from './img/finalpics/pics (1).jpg';
import cPic2 from './img/finalpics/pics (2).jpg';
import cPic3 from './img/finalpics/pics (3).jpg';
import cPic4 from './img/finalpics/pics (4).jpg';
import cPic5 from './img/finalpics/pics (5).jpg';
import cPic6 from './img/finalpics/pics (6).jpg';
import cPic7 from './img/finalpics/pics (7).jpg';
import cPic8 from './img/finalpics/pics (8).jpg';
import cPic9 from './img/finalpics/pics (9).jpg';
import cPic10 from './img/finalpics/pics (10).jpg';
import cPic11 from './img/finalpics/pics (11).jpg';
import cPic12 from './img/finalpics/pics (12).jpg';
import cPic13 from './img/finalpics/pics (13).jpg';
import cPic14 from './img/finalpics/pics (14).jpg';
import cPic15 from './img/finalpics/pics (15).jpg';
import cPic16 from './img/finalpics/pics (16).jpg';
import cPic17 from './img/finalpics/pics (17).jpg';
import cPic18 from './img/finalpics/pics (18).jpg';
import cPic19 from './img/finalpics/pics (19).jpg';
import cPic20 from './img/finalpics/pics (20).jpg';
import cPic21 from './img/finalpics/pics (21).jpg';
import cPic22 from './img/finalpics/pics (22).jpg';
import cPic23 from './img/finalpics/pics (23).jpg';
import cPic24 from './img/finalpics/pics (24).jpg';
import cPic25 from './img/finalpics/pics (25).jpg';
import cPic26 from './img/finalpics/pics (26).jpg';
import cPic27 from './img/finalpics/pics (27).jpg';
import cPic28 from './img/finalpics/pics (28).jpg';
import cPic29 from './img/finalpics/pics (29).jpg';
import cPic30 from './img/finalpics/pics (30).jpg';
import cPic31 from './img/finalpics/pics (31).jpg';
import cPic32 from './img/finalpics/pics (32).jpg';
import cPic33 from './img/finalpics/pics (33).jpg';
import cPic34 from './img/finalpics/pics (34).jpg';
import cPic35 from './img/finalpics/pics (35).jpg';
import cPic36 from './img/finalpics/pics (36).jpg';
import cPic37 from './img/finalpics/pics (37).jpg';
import cPic38 from './img/finalpics/pics (38).jpg';
import cPic39 from './img/finalpics/pics (39).jpg';
import cPic40 from './img/finalpics/pics (40).jpg';
import cPic41 from './img/finalpics/pics (41).jpg';
import cPic42 from './img/finalpics/pics (42).jpg';
import cPic43 from './img/finalpics/pics (43).jpg';
import cPic44 from './img/finalpics/pics (44).jpg';
import cPic45 from './img/finalpics/pics (45).jpg';
import cPic46 from './img/finalpics/pics (46).jpg';
import cPic47 from './img/finalpics/pics (47).jpg';
import cPic48 from './img/finalpics/pics (48).jpg';

function Pictures(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    const allPics = [cPic1,cPic2,cPic3,cPic4,cPic5,cPic6,cPic7,cPic8,cPic9,cPic10,cPic11,cPic12,cPic13,cPic14,cPic15,cPic16,cPic17,cPic18,cPic19,cPic20,cPic21,cPic22,cPic23,cPic24,cPic25,cPic26,cPic27,cPic28,cPic29,cPic30,cPic31,cPic32,cPic33,cPic34,cPic35,cPic36,cPic37,cPic38,cPic39,cPic40,cPic41,cPic42,cPic43,cPic44,cPic45,cPic46,cPic47,cPic48
    ];

    const [collage, setCollage] = useState([]);

  useEffect(() => {
    const verticalPics = [];
    const horizontalPics = [];
    allPics.forEach((imgUrl) => {
      let img = new Image();
      img.src = imgUrl;
        const aspectRatio = img.width / img.height;
        if (aspectRatio >= 1) {
          // Image is horizontal or square
          horizontalPics.push([imgUrl, img.height, img.width]);
        } else {
          // Image is vertical
          verticalPics.push([imgUrl, img.height, img.width]);
        }
        const totalWidth = window.innerWidth;
        const verticalWidth = totalWidth / 2;
        const horizontalHeight = (totalWidth / 2) / 16 * 9; // Assuming a 16:9 aspect ratio for horizontal images
        const verticalHeight = verticalWidth / 9 * 16; // Assuming a 9:16 aspect ratio for vertical images
        const gridGap = 10;
        const collage = [];
        let x = 0;
        let y = 0;
        verticalPics.forEach(pic => {
          collage.push({
            src: pic[0],
            x: x,
            y: y,
            width: verticalWidth,
            height: verticalHeight,
          });
          y += verticalHeight + gridGap;
        });
        x = verticalWidth + gridGap;
        y = 0;
        horizontalPics.forEach(pic => {
          collage.push({
            src: pic[0],
            x: x,
            y: y,
            width: totalWidth - x - gridGap,
            height: horizontalHeight,
          });
          y += horizontalHeight + gridGap;
        });
        setCollage(collage);
    });
  }, [allPics]);

    
    return (
        <div className='wrapper'>
            <div className='top-img top-img-pics'></div>
            <div >
                <Collage images={collage} />
            </div>


        </div>
    );
}

export default Pictures;