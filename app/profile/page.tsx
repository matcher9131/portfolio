import { classes } from "../_util/classes";
import { pageProperties } from "./properties";

const Profile = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <table
                className={classes(
                    "mx-auto",
                    "text-lg",
                    "leading-8",
                    "[&_td]:py-4",
                    "[&_th]:py-4",
                    "[&_th]:pr-10",
                    "[&_th]:text-right",
                    "[&_th]:align-top",
                )}
            >
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <td>matcher</td>
                    </tr>
                    <tr>
                        <th>Birthplace:</th>
                        <td>Kyoto</td>
                    </tr>
                    <tr>
                        <th>Jobs:</th>
                        <td>
                            Cram school teacher
                            <br />
                            (for junior & senior high school students)
                        </td>
                    </tr>
                    <tr>
                        <th>Skills:</th>
                        <td>
                            TOEIC Score 800 (Sep. 2023)
                            <br />
                            AtCoder Rating 1304
                        </td>
                    </tr>
                    <tr>
                        <th>Hobbies:</th>
                        <td>
                            Video games
                            <br />
                            Piano
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
};

export default Profile;
