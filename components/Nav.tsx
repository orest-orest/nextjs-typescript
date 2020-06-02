import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';


type LayoutProps = {
    title?: string,
    nav?: any,
    children?: any,
}

const Navbar = styled.nav`
   display: flex;
    background-color: #0066ff;`
;

const Li = styled.li`
  font-size: 20px;
  display: inline-block;
  margin-right: 10px; 
`;

const A = styled.a`

`;

const Nav: React.FunctionComponent<LayoutProps> = () => (
    <div>
        <Head>

            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <Navbar>
                <ul>
                    <Li>
                        <Link href="/">
                            <A>LatestPosts</A>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="/createPost">
                            <A>Create New Post</A>
                        </Link>
                    </Li>
                </ul>
            </Navbar>
        </header>

    </div>
);

export default Nav