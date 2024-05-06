import List from "./List.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import Details from "./Details.tsx";


function App() {
    const url = import.meta.env.VITE_URL
    const [userActiveId, setUserActiveId] = useState(-1)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url + '/users.json')
            .then(response => response.json())
            .then(json => {
                setUsers(json)
            })
    }, [])

    return (
        <Container className="mt-5">
            <Row>
                <Col><List list={users} onClick={setUserActiveId}
                           activeUserId={userActiveId >= 0 ? userActiveId : null}></List></Col>
                <Col>{userActiveId >= 0 ? <Details url={url + `/${userActiveId}.json`}/> : null}</Col>
            </Row>
        </Container>
    )
}

export default App