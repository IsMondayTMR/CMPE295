import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 56px;
    margin: 0;
    height: 320px;
    background: #696969;
    /* vertical-align: bottom; */
    display:block;
    padding-bottom:10px;

    @media (max-width: 1000px) {
        padding: 70px 30px;
        height: 800px;
    }
    @media (min-width: 1800px) {
        height: 400px;
    }
`;

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color: white;
    margin-bottom: 20px;
    font-size: 15px;
    text-decoration: none;
`;

export const Title = styled.p`

    font-size: 18px;
    color: white;
    margin-bottom: 40px;
    
`;

export const Text = styled.p`
    font-size: 15px;
    color: white;
    margin-bottom: 40px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const ExternalLink = styled.a``

export const Bottom = styled.div`
    height:50px;
    background-color: #303030;
    margin:0;
    width:100%
`