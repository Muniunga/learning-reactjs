import React from "react";
import ReactDOM from "react-dom/client";

export default function HelloReact() {
    return (
        <section>
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
            </div>
        </section>
    );
}

const container = document.getElementById("hello-react");
const root = ReactDOM.createRoot(container);
root.render(<HelloReact />);
