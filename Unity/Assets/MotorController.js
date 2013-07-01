#pragma strict

import System.IO;

private static var devicePath = "/dev/cu.usbmodem1431";

private var stream : FileStream;
private var level = 0.0;

function Start() {
	stream = new FileStream(devicePath, FileMode.Open, FileAccess.Write, FileShare.Write);
}

function Update() {
	stream.WriteByte(255 * level);
	stream.Flush();
}

function OnGUI() {
	level = GUI.HorizontalSlider(Rect(32, 32, 256, 32), level, 0.0, 1.0);
	GUI.Label(Rect(32, 48, 256, 32), "Level = " + level);
}
