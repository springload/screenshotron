<?php
/**
 * User: river
 * @link http://proscom.ru
 * @copyright: Copyright (c) 2016 Простые Коммуникации
 */
if (!empty($_POST)) {
    $url = $_POST['url'];
    $delay = $_POST['delay'];
    $size = $_POST['size'];
    
    $timestamp = time();

    function MakeDirectory($timestamp)
    {
        if (!mkdir($timestamp, 0777, true)) {
            return false;
        }
    }

    function GenerateImage($timestamp, $url, $delay, $size)
    {
        chdir("image/" . $timestamp);
        exec('#!/usr/bin/env node
    node /var/www/html/screenshotron/index.js ' . $url . ' --delay ' . $delay . ' --size ' . $size);
    }

    MakeDirectory($timestamp);
    GenerateImage($timestamp, $url, $delay, $size);
}
?>