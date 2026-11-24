
function render({ model, el }) {
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Widget configuration
  const WIDTH = 540;
  const HEIGHT = 420;
  const LINE_COUNT = 30;
  const STATIONARY_SPACING = 12;
  const LINE_WIDTH = 8;
  const initialOffset = model.get("offset") ?? 0;
  const movingExtraSpacing = model.get("extraSpacing") ?? 1;

  // Main widget container
  const container = document.createElement("div");
  container.className = "moire-widget";

  container.innerHTML = `
    <svg viewBox="0 0 ${WIDTH} ${HEIGHT}"
         role="img"
         aria-label="Two overlapping sets of horizontal lines producing a moire pattern">

      <defs>
        <clipPath id="moire-clip">
          <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}"
                rx="4"/>
        </clipPath>
      </defs>

      <g id="stationary-lines" clip-path="url(#moire-clip)"></g>
      <g id="moving-lines" clip-path="url(#moire-clip)"></g>
    </svg>

    <div class="controls">
      <div class="legend">

      <div class="slider-row">
        <input
          id="moire-offset-slider"
          type="range"
          min="-40"
          max="40"
          step="0.5"
          value="${initialOffset}"
          aria-label="Move the red set of lines vertically"
        />

        <output class="offset-value" id="moire-offset-value">
          ${initialOffset.toFixed(1)} px
        </output>
      </div>

      <button class="reset" type="button">
        Reset position
      </button>

      <div class="slider-row">
        <input
          id="moire-spacing-slider"
          type="range"
          min="0"
          max="3"
          step="0.1"
          value="${movingExtraSpacing}"
          aria-label="Change the spacing between the red lines"
        />

        <output class="offset-value" id="moire-spacing-value">
          ${movingExtraSpacing.toFixed(1)} px
        </output>
      </div>
    </div>
  `;

  el.appendChild(container);

  const stationaryGroup =
    container.querySelector("#stationary-lines");

  const movingGroup =
    container.querySelector("#moving-lines");

  const offsetSlider =
    container.querySelector("#moire-offset-slider");

  const offsetOutput =
    container.querySelector("#moire-offset-value");

  const spacingSlider =
    container.querySelector("#moire-spacing-slider");

  const spacingOutput =
    container.querySelector("#moire-spacing-value");

  const resetButton =
    container.querySelector(".reset");


  // Create one set of evenly spaced horizontal lines
  function createLines(group, spacing, color) {
    for (let i = 0; i < LINE_COUNT; i++) {
      const line = document.createElementNS(SVG_NS, "line");

      const y = 40 + i * spacing;
      const xOffset = group === movingGroup ? 20 : 0;

      line.setAttribute("x1", xOffset);
      line.setAttribute("x2", WIDTH - xOffset);

      line.setAttribute("y1", y.toString());
      line.setAttribute("y2", y.toString());

      line.setAttribute("stroke", color);
      line.setAttribute("stroke-width", LINE_WIDTH.toString());

      group.appendChild(line);
    }
  }

  // Draw the two independent line sets
  createLines(
    stationaryGroup,
    STATIONARY_SPACING,
    "#2463a6"
  );

  createLines(
    movingGroup,
    STATIONARY_SPACING + movingExtraSpacing,
    "#e05252"
  );

  // Update the vertical position of the moving set
  function updateOffset(value, updateModel = true) {
    const offset = Math.max(-40, Math.min(40, Number(value)));

    movingGroup.setAttribute(
      "transform",
      `translate(0 ${offset})`
    );

    offsetSlider.value = offset;
    offsetOutput.textContent = `${offset.toFixed(1)} px`;

    if (updateModel) {
      model.set("offset", offset);

      if (typeof model.save_changes === "function") {
        model.save_changes();
      }
    }
  }

  // Slider interaction
  offsetSlider.addEventListener("input", (event) => {
    updateOffset(event.target.value);
  });

  function updateSpacing(value, updateModel = true) {
    const spacing = Math.max(0, Math.min(3, Number(value)));

    movingGroup.querySelectorAll("line").forEach((line, index) => {
      const y = 40 + index * (STATIONARY_SPACING + spacing);
      line.setAttribute("y1", y.toString());
      line.setAttribute("y2", y.toString());
    });

    spacingSlider.value = spacing;
    spacingOutput.textContent = `${spacing.toFixed(1)} px`;

    if (updateModel) {
      model.set("extraSpacing", spacing);

      if (typeof model.save_changes === "function") {
        model.save_changes();
      }
    }
  }

  spacingSlider.addEventListener("input", (event) => {
    updateSpacing(event.target.value);
  });

  // Reset button
  resetButton.addEventListener("click", () => {
    updateOffset(0);
  });

  // Respond to external model updates
  const modelChanged = () => {
    const value = model.get("offset") ?? 0;
    updateOffset(value, false);
  };

  const spacingChanged = () => {
    const value = model.get("extraSpacing") ?? 1;
    updateSpacing(value, false);
  };

  model.on("change:offset", modelChanged);
  model.on("change:extraSpacing", spacingChanged);

  // Initial rendering
  updateOffset(initialOffset, false);
  updateSpacing(movingExtraSpacing, false);

  // Cleanup when widget is removed
  return () => {
    container.remove();
  };
}

export default { render };
