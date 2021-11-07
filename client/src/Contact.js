import React from "react";


const Contact = () => {
  return (
    <>
      <div className="bg-info py-5">
        <div className="container bg-light w-75 py-2 d-flex justify-content-center">
          <div className="contact-item w-75 border border-dark p-2 text-info">
            <h5 className="fst-italic text-warning">MoneyTransfer</h5>
            <h6 className="pt-5">Contact Us</h6>
            <div className="d-flex p-4 justify-content-between">
              <div className="contact-left">
                <h6>Registered Office :</h6>
                <p className="text-dark">MoneyTransfer Ltd.</p>
                <p className="text-dark">INDIAN Tower, WTC Complex,</p>
                <p className="text-dark">Cuffe Parade, Colaba, Mumbai 400005.</p>
              </div>
              <div className="contact-right">
                <p>Customers can contact our 24 X 7 Phone Banking numbers
                  from any Landline / Mobile number, our Toll free numbers are as follows:</p>
                <p className="text-dark">1800-209-4324</p>
                <p className="text-dark">1800-22-1070</p>
                <hr className="text-dark" />

                <span> Card Blocking Toll Free number : <p className="text-dark">1800-22-6999 </p></span>

                <span>Debit Card blocking through SMS: <p className="text-warning">In case you remember your Card number</p></span>
                <p className="text-dark"> <b> SMS BLOCK  Customer ID  Card Number to 5676777 </b></p>
                <p className="text-dark">Eg: SMS BLOCK 12345678 4587771234567890 to 5676777</p>
                <p className="text-warning">In case you do not remember your Card number</p>
                <p className="text-dark"><b>SMS BLOCK Customer ID to 5676777</b></p>
                <p className="text-dark">Eg: SMS BLOCK 12345678 to 5676777</p>
                <hr className="text-dark" />

                <p>Our Non-Toll Free number: </p>
                <p className="text-dark">+91-22-67719100</p>
                <p>Contact number for outside India customers:</p>
                <p className="text-dark">+91-22-67719100</p>
                <hr className="text-dark" />

                <p>Credit Card Customer Care</p>
                <p className="text-warning">For Hotlisting of Credit Cards /Queries / Complaints</p>
                <p className="text-dark">Call 24 * 7 Toll Free – 1800 425 7600</p>
                <p className="text-dark">Call 24 * 7 Non Toll Free - 022 - 4042 6013</p>
                <p className="text-dark">Email -idbicards@idbi.co.in</p>
                <p className="text-warning">For Credit Card Reward Points related queries/complaints</p>
                <p className="text-dark">Call - 1800 208 1947 (Monday –Saturday 9 A.M to 6 P.M)</p>
                <p className="text-dark">Email –membersupport@idbidelight.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;