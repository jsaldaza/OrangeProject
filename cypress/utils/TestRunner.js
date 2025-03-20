const { exec } = require("child_process");

class TestRunner {
  constructor() {
    this.defaultTags = "@smoke or @regression"; // Tags por defecto
  }

  runTests(tags) {
    const selectedTags = tags || this.defaultTags;
    console.log(`🚀 Ejecutando pruebas con tags: ${selectedTags}`);

    const cypressProcess = exec(`npx cypress run --env grepTags="${selectedTags}"`, { stdio: "inherit" });

    cypressProcess.stdout?.on("data", (data) => console.log(data));
    cypressProcess.stderr?.on("data", (data) => console.error(`⚠️ ${data}`));

    cypressProcess.on("exit", (code) => {
      if (code === 0) {
        console.log("✅ Todas las pruebas pasaron correctamente.");
      } else {
        console.error(`❌ Algunas pruebas fallaron. Código de salida: ${code}`);
      }
    });
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const tagFilter = args.length > 0 ? args.join(" ") : null;
  new TestRunner().runTests(tagFilter);
}

module.exports = TestRunner;
