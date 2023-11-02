import { useEffect, useState } from "react";
import swal from "sweetalert";
import { DataTable } from "../../../shares";

const Contact = () => {
  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    getAllContacts();
  }, []);

  function getAllContacts() {
    fetch("http://localhost:4000/v1/contact")
      .then((res) => res.json())
      .then((allContacts) => {
        console.log(allContacts);
        setContacts(allContacts);
      });
  }

  const showContactBody = (body: string): void => {
    swal({
      title: body,
      buttons: "اوکی",
    });
  };

  const sendAnwserToUser = (contactEmail: string): void => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    swal({
      title: "متن پاسخ را وارد کنید",
      content: "input",
      buttons: "ارسال ایمیل",
    }).then((value) => {
      console.log(value);

      const anwserInfo = {
        email: contactEmail,
        answer: value,
      };

      fetch("http://localhost:4000/v1/contact/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(anwserInfo),
      })
        .then((res) => {
          getAllContacts();
          if (res.ok) {
            return res.json();
          }
        })
        .then((result) => console.log(result));
    });
  };

  const removeContact = (contactID: string): void => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    swal({
      title: "",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/contact/${contactID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal({
              title: "پیغام مورد نظر با موفقیت حذف شد",
              icon: "success",
              buttons: "اوکی",
            }).then(() => {
              getAllContacts();
            });
          }
        });
      }
    });
  };

  return (
    <>
      <DataTable title="پیغام‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>شماره تماس</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr>
                <td
                  className={`${
                    contact.answer ? "answer-contact" : "no-answer-contact"
                  }`}
                >
                  {index + 1}
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => showContactBody(contact.body)}
                  >
                    مشاهده پیغام
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => sendAnwserToUser(contact.email)}
                  >
                    پاسخ
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => removeContact(contact._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </>
  );
};

export default Contact;
