import {Card, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";

type Props = {
    url: string,
}

const userInit = {name: "", id: -1, avatar: "", details: {city: "", company: "", position: ""}};

export default function Details({url}: Props) {
    const [user, setUser] = useState(userInit)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setUser(json)
                setLoading(false)
            })
    }, [url])

    return loading
        ? <span>Loading...</span>
        : <Card className="border">
            <Card.Img variant="top" src={user.avatar}/>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{user.details.city}</ListGroup.Item>
                <ListGroup.Item>{user.details.company}</ListGroup.Item>
                <ListGroup.Item>{user.details.position}</ListGroup.Item>
            </ListGroup>
        </Card>;
}