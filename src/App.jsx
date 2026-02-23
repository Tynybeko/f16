// import { useEffect, useState } from "react"
// import axios from "axios"
// import EditModal from "./components/EditModal"
// import ConfirmModal from "./components/common/ConfirmModal"
// import CategoryList from "./components/category/CategoryList"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Button } from "./components/UI/Button"
import Modal from "./components/UI/Modal"
import Input from "./components/UI/Input"


export default function App() {

  return (
    <div  >

      {/* <Modal>
        <Button>
          <h1>  AJSDLKJASLDJLAJSK</h1>
        </Button>
      </Modal> */}
{/* 
      <Modal>
        <div>asdnaskjdhkjashdkqyugr12221</div>
      </Modal> */}
      <Input className="text-red-500" type="checkbox"/>
      <Input type="radio"/>
      <Input className="text-red-500" type="text"/>
      {/* <CategoryList /> */}
    </div>
  )
}
