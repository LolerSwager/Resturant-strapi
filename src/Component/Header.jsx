import imglogo from '../Assets/Image/logo.png';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        border-bottom: 1px solid;
        .logo{
            margin: 0 1.5rem;
            img{
                height: 30px;
            }
        }
        ul{
            display: inherit;
            gap: 1.5rem;
            margin: 0 1.5rem;
            li{
                display: inherit;
                font-weight: 600;
                list-style: none;
                a{
                    color: black;
                    text-decoration: none;
                    &:hover{
                        color: rebeccapurple;
                    }   
                }
            }
        }

`

export default function Header() {
    return (
        <header>
            <Nav>
                <div className="logo">
                    <Link to="/home"><img src={imglogo} alt="logo" /></Link>
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Resturant">Resturant list</Link></li>
                </ul>
            </Nav>
        </header>
    )
}