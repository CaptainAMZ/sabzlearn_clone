import React, { useEffect, useState } from "react";
import {
  DataTable,
  Input,
  maxValidator,
  minValidator,
  useForm,
} from "../../../shares";
import "./Category.css";
import swal from "sweetalert";

import "./Category.css";

type Props = {};

const Category = (props: Props) => {
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortname: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  function getAllCategories() {
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        console.log(allCategories);
        setCategories(allCategories);
      });
  }

  const createNewCategory = (e: React.MouseEvent) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user")!);

    const newCategoryInfo = {
      title: formState.inputs.title.value,
      name: formState.inputs.shortname.value,
    };

    fetch("http://localhost:4000/v1/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify(newCategoryInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        swal({
          title: "دسته بندی مورد نظر با موفقیت اضافه شد",
          icon: "success",
          buttons: {
            item: {
              text: "اوکی",
            },
          },
        }).then(() => {
          getAllCategories();
        });
      });
  };

  const removeCategory = (categoryID: string): void => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    swal({
      title: "آیا از حذف دسته بندی اطمینان داری؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/category/${categoryID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        })
          .then((res) => res.json())
          .then((result) => {
            swal({
              title: "دسته بندی مورد نظر با موفقیت حذف شد",
              icon: "success",
              buttons: {
                item: {
                  text: "اوکی",
                },
              },
            }).then(() => {
              getAllCategories();
            });
          });
      }
    });
  };

  const updateCategory = (categoryID: string): void => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    swal({
      title: "عنوان جدید دسته بندی را وارد نمایید",
      content: "input",
      buttons: "ثبت عنوان جدید",
    }).then((result) => {
      if (result.trim().length) {
        fetch(`http://localhost:4000/v1/category/${categoryID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData.token}`,
          },
          body: JSON.stringify({
            name: result,
            title: result,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            swal({
              title: "دسته بندی مورد نظر با موفقیت ویرایش شد",
              icon: "success",
              buttons: {
                item: {
                  text: "اوکی",
                },
              },
            }).then(() => {
              getAllCategories();
            });
          });
      }
    });
  };

  return (
    <>
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-title">
            <span>افزودن دسته‌بندی جدید</span>
          </div>
          <form className="form">
            <div className="col-6">
              <div className="name input">
                <label className="input-title">عنوان</label>
                <Input
                  element="input"
                  onInputHandler={onInputHandler}
                  type="text"
                  id="title"
                  placeholder="لطفا عنوان را وارد کنید..."
                  validation={[minValidator(5), maxValidator(20)]}
                />
                <span className="error-message text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">اسم کوتاه</label>
                <Input
                  element="input"
                  onInputHandler={onInputHandler}
                  type="text"
                  id="shortname"
                  placeholder="لطفا اسم کوتاه را وارد کنید..."
                  validation={[minValidator(5), maxValidator(20)]}
                />
                <span className="error-message text-danger"></span>
              </div>
            </div>
            <div className="col-12">
              <div className="bottom-form">
                <div className="submit-btn">
                  <input
                    type="submit"
                    value="افزودن"
                    onClick={createNewCategory}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable title="دسته‌بندی‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{category.title}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => updateCategory(category._id)}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => removeCategory(category._id)}
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

export default Category;
