import { Card } from "antd"
import { useState } from "react"
import { Reorder,motion } from "framer-motion"

const Draggable = () => {

    const [items,setItems] = useState([1,2,3,4,5])

  return (
    
        <main className="">
    <Reorder.Group values={items} onReorder={setItems} className="grid grid-cols-3">
            {items.map((item) => {
                return (
                        <Reorder.Item value={item} key={item} drag='x' >
                             <motion.div drag="x" key={item}>
                                <Card title="Default size card" extra={<a href="#">More</a>} className="m-2">
                                    <p>Card content {item}</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                        </motion.div>
                        </Reorder.Item>
                )
            })}
    </Reorder.Group>
            </main>
  )
}

export default Draggable