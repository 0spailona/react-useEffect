import {ListGroup} from "react-bootstrap";

type Props = {
    list: Array<{ id: number, name: string }> | null,
    onClick: (id: number) => void,
    activeUserId: number | null
}

export default function List({list, onClick, activeUserId}: Props) {
    if (!list) return

    return (
        <ListGroup>
            {list.map(item => <ListGroup.Item style={{cursor: "pointer"}} key={item.id} onClick={() => onClick(item.id)}
                                              active={activeUserId === item.id}>{item.name}</ListGroup.Item>)}
        </ListGroup>
    )
}
