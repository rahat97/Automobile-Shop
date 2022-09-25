import React from "react";

const MyAppointments = () => {
    return (
        <div>
            <h2  className="font-bold my-5">Cars List:</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Selected Cars Model</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Md.Abdur Rakib Rahat</td>
                        <td>Jul 15,2022</td>
                        <td>11.00 AM - 11.30 AM</td>
                        <td>Tesla X</td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Jul 11,2022</td>
                        <td>10.00 AM - 10.30 AM</td>
                        <td>Audi Q8</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Jul 13,2022</td>
                        <td>11.00 AM - 11.30 AM</td>
                        <td>Tesla Model 3</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>4</th>
                        <td>Brice Swyre</td>
                        <td>Jul 16,2022</td>
                        <td>1.30 PM - 2.00 PM</td>
                        <td>Ford Xtrail</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;