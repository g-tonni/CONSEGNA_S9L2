import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import books from '../books/horror.json'

function BookCard() {
  return (
    <Row className="g-4 px-4">
      {books.map((book) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={book.asin}>
            <Card className="shadow border-0 overflow-hidden h-100">
              <div className="overflow-hidden" style={{ height: 300 }}>
                <img src={book.img} alt="Libro" className="w-100" />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate fw-bold">
                  {book.title}
                </Card.Title>
                <Card.Text className="flex-grow-1 d-flex align-items-center">
                  <span className="fs-5">{book.price}</span> €
                </Card.Text>
                <Button variant="warning">Scopri di più</Button>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default BookCard
