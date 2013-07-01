int level = 0;

void setup() {
  Serial.begin(9600);
  pinMode(0, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  digitalWrite(5, LOW);
}

void loop() {
  int fader = analogRead(0);
  if (Serial.available() > 0) {
    level = Serial.read();
  }
  analogWrite(5, max(fader, level));
}

