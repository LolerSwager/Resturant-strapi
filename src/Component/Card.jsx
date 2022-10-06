import {useState, useEffect} from 'react'
import styled from 'styled-components'

const CardStyle = styled.article`
    margin: 0 0 1rem 0;
    flex-direction: column;
    display: flex;
    flex-basis: auto;
    width: 1200px;
    margin:  0 auto 3rem auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .cardtop{
        position: relative;
        img{
            width: 100%;
        }
        .bottomleft {
            position: absolute;
            bottom: 15px;
            left: 15px;
            background: #232323e5;
            padding: 1rem;
            color: #f2f2f2;
        }
        .bottomright{
            position: absolute;
            bottom: 15px;
            right: 15px;
            background: #232323e5;
            padding: 1rem;
            color: #f2f2f2;
        }
    }
   .content{
        display: flex;
        margin: 1rem;
        gap: 1rem;
        div{
            display: inherit;
            img{
            height: 150px;
            }
            &:first-child{
                display: flex;
                flex-direction: column;
               justify-content: space-between;
            }
        }
    }
`

export default function Card() {

    const [data, setData] = useState([]);
    const url = `http://127.0.0.1:1337/api/restaurants?populate=*`

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json();
            })
            .then(data => {
                setData(data.data);
                console.log(data.data)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })
    }, [url])

    return(
       <section>
            {data && data.map(item => {
                return(
                    <CardStyle>
                        <div className='cardtop'>
                            <img src={'http://127.0.0.1:1337' + item.attributes.image.data[2].attributes.url} alt="" />
                            <div className='bottomleft'>
                                <h1>{item.attributes.Name}</h1>
                                <p>{item.attributes.Address}</p>
                            </div>
                            <div className="bottomright">
                                <p>Åbningstider:</p>
                                <p>{item.attributes.OpenningHours.Hours}  {item.attributes.OpenningHours.Days}</p>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <p>{item.attributes.Description}</p>
                                <a href={"https://www.google.com/search?q="+item.attributes.Address+' '+item.attributes.Name} target="_blank">Go to {item.attributes.Name}</a>
                            </div>
                            <div>
                                <img src={'http://127.0.0.1:1337' + item.attributes.image.data[1].attributes.url} alt="" />
                                <img src={'http://127.0.0.1:1337' + item.attributes.image.data[0].attributes.url} alt="" />
                            </div>
                        </div>
                    </CardStyle>
                )
            })}
       </section>
    )
}
