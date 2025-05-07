class BetterMath {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "BetterMath",
            "name": "Better Math",
            "blocks": [{
                "opcode": "approxEqual",
                "blockType": Scratch.BlockType.BOOLEAN,
                "text": "[left] ≈ [right]",
                "arguments": {
                    "left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4.5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.4
                    }
                }
            },
			{
				"opcode": "notEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≶ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "equal",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≸ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "lessThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≤ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "moreThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≥ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.1
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "notLessThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≰ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "notMoreThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≱ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.1
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "notLessThan",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≮ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "notMoreThan",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≯ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "lessOrApproxEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≲ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.1
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "moreOrApproxEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≳ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.1
                    }
				}
			},
			{
				"opcode": "precedes",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≺ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "succeeds",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≻ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "doublePrecedes",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ⪻ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 3
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "doubleSucceeds",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ⪼ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 3
                    }
				}
			},
			{
				"opcode": "notPrecedes",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ⊀ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "notSucceeds",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ⊁ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "precedesOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≼ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "succeedsOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≽ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "precedesOrApproxEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≾ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "succeedsOrApproxEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[left] ≿ [right]",
				"arguments": {
					"left": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "Δ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Δ[𝑥]",
				"arguments": {
                    "𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "Σ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Σ([up], [down], [right])",
				"arguments": {
                    "up": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 1
                    },
					"right": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 2
                    },
					"down": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 3
                    }
				}
			},
			{
				"opcode": "π",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "π"
			},
			{
				"opcode": "Φ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Φ"
			},
			{
				"opcode": "𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑒"
			},
			{
				"opcode": "sqrt2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√2"
			},
			{
				"opcode": "sqrt3",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√3"
			},
			{
				"opcode": "cbrt2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∛2"
			},
			{
				"opcode": "γ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "γ"
			},
			{
				"opcode": "gamma",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Γ[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "sqrt",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					}
				}
			},
			{
				"opcode": "cbrt",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∛[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 10
					}
				}
			},
			{
				"opcode": "ftrt",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∜[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 10
					}
				}
			},
			{
				"opcode": "root",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑦]√[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 10
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 10
					}
				}
			}
			],
            "menus": {
                "roundingMethods": {
                    "acceptReporters": true,
                    "items": ["floor", "round", "ceil"]
                }
            }
        }
    }

    approxEqual({ left, right }) {
		return Math.round(left) === Math.round(right)
	}

	notEqual({ left, right }) {
		return left !== right
	}

	equal({ left, right }) {
		return left === right
	}

	lessOrApproxEqual({ left, right }) {
		return (left < right) || this.approxEqual({ left: left, right: right })
	}

	moreOrApproxEqual({ left, right }) {
		return (left > right) || this.approxEqual({ left: left, right: right })
	}

	precedes({ left, right }) {
		return left + 1 === right
	}

	succeeds({ left, right }) {
		return left === right + 1
	}

	doublePrecedes({ left, right }) {
		return left + 2 === right
	}

	doubleSucceeds({ left, right }) {
		return left === right + 2
	}

	precedesOrEqual({ left, right }) {
		return (left + 1 === right) || left === right
	}

	succeedsOrEqual({ left, right }) {
		return (left === right + 1) || left === right
	}

	precedesOrApproxEqual({ left, right }) {
		return (left + 1 === right) || this.approxEqual({ left: left, right: right })
	}

	succeedsOrApproxEqual({ left, right }) {
		return (left === right + 1) || this.approxEqual({ left: left, right: right })
	}

	notPrecedes({ left, right }) {
		return !this.precedes({ left: left, right: right })
	}

	notSucceeds({ left, right }) {
		return !this.succeeds({ left: left, right: right })
	}

	lessThanOrEqual({ left, right }) {
		return left <= right
	}

	moreThanOrEqual({ left, right }) {
		return left >= right
	}

	notLessThanOrEqual({ left, right }) {
		return !(left <= right)
	}

	notMoreThanOrEqual({ left, right }) {
		return !(left >= right)
	}

	notLessThan({ left, right }) {
		return !(left < right)
	}

	notMoreThan({ left, right }) {
		return !(left > right)
	}

	Δ({ 𝑥 }) {
		return 0
	}

	Σ({ up, right, down }) {
		let result = 0

		if (down < up) {
			for (let i = down; i <= up; i ++) {
				result += right
			}
		}
		else {
			for (let i = up; i <= down; i ++) {
				result += right
			}
		}

		return result
	}

	π({}) {
		return Math.PI
	}

	Φ({}) {
		return (1 + Math.sqrt(5)) / 2
	}

	𝑒({}) {
		return Math.E
	}

	sqrt2({}) {
		return Math.SQRT2
	}

	sqrt3({}) {
		return Math.sqrt(3)
	}

	cbrt2({}) {
		return Math.cbrt(2)
	}

	ln2({}) {
		return Math.LN2
	}

	γ({}) {
		return Math.round((1 - this.gamma(1 + 1e-8)) * 1e14) * 1e-6
	}

	gamma({ 𝑥 }) {
		return Math.sqrt(2 * Math.PI / 𝑥) * Math.pow((𝑥 + 5.5) / Math.E, 𝑥)
	}

	sqrt({ 𝑥 }) {
		return Math.sqrt(𝑥)
	}

	cbrt({ 𝑥 }) {
		return Math.cbrt(𝑥)
	}

	ftrt({ 𝑥 }) {
		return Math.pow(𝑥, 0.25)
	}

	root({ 𝑥, 𝑦 }) {
		return Math.pow(𝑥, 1 / 𝑦)
	}
}

Scratch.extensions.register(new BetterMath())
