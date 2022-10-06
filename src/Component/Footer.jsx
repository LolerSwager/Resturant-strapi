import styled from "styled-components";

const FooterStyle = styled.footer`
    grid-area: footer;

    background-color:  #353535;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: #f2f2f2;
    }
    .media{
        a{ 
            i{
                color: white;
                margin: 0 0 0 1rem;
            }
            .fa-linkedin:hover{
                color: #0077b5;
            }
            .fa-facebook:hover{
                color: #4267B2;
            }
            .fa-twitter:hover{
                color: #1DA1F2;
            }
        }
    }

`

export default function Footer() {
    return (
        <FooterStyle>
            <p>2022 - 2022 FooterText.com ©</p>
            <div className="media">
                <a href="https://linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </FooterStyle>
    );
}