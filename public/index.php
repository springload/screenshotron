<?php
if (!isset($_POST["button"])) {
    $url = $_POST["url"];
    $delay = $_POST["delay"];
    $size = $_POST["size"];

    $timestamp = time();

    function MakeDirectory($timestamp)
    {
        if (!mkdir("image/" . $timestamp, 0777, true)) {
            return false;
        }
    }


    function GenerateImage($timestamp, $url, $delay, $size)
    {
        exec("cd image/" . $timestamp . " && " . "/usr/local/bin/node ../../../index.js"
            . " " . $url
            . " " . "--delay" . " " . $delay
            . " " . "--size" . " " . $size
        );
    }

    MakeDirectory($timestamp);
    GenerateImage($timestamp, $url, $delay, $size);
}
?>
<html>
<body>
<form method="post">
    <center>
        <div>
            <h1>Screenshoter</h1>
            <p>Url: </p>   <p><input type="text" name="url"></p>
            <p>Delay: </p>  <p><input type="text" name="delay"></p>
            <p>Size: </p>
            <p>
                <select name="size">
                    <option value="1280x1024">1280x1024</option>
                    <option value="1366x768">1366x768</option>
                    <option value="1920x1080">1920x1080</option>
                </select>
            </p>

            <p>
                <button value="OK" name="button">Run</button>
            </p>
        </div>
        <center>

</form>


</body>
