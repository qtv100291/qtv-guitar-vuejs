<template>
  <div class="form-part">
    <input
      :type="typeInputCal"
      :name="name"
      :id="id"
      :required="isRequired"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :maxlength="maxLength ? maxLength : null"
    />
    <label :for="id">{{ label }}</label>
    <img
      class="eye-icon"
      v-if="typeInput === 'password' && !isHiddenPassword"
      src="images/HomePage/eye.png"
      @click="changePasswordVisibility"
    />
    <img
      class="eye-icon"
      v-if="typeInput === 'password' && isHiddenPassword"
      src="images/HomePage/closeeye.png"
      @click="changePasswordVisibility"
    />
    <div class="error" v-if="errorValue">{{ errorValue }}</div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
// import { computed } from 'vue';
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    id: String,
    label: String,
    errorValue: {
      type: String,
      default: "",
    },
    isRequired: Boolean,
    typeInput: {
      type: String,
      default: "text",
    },
    maxLength: {
      type: Number,
      default: 0,
    },
  },
  emits: ["update:modelValue"],

  setup(props) {
    const isHiddenPassword = ref(true);
    const typeInputCal = ref("text");
    if (props.typeInput === "password")
      if (isHiddenPassword.value) typeInputCal.value = "password";
      else typeInputCal.value = "text";
    else typeInputCal.value === props.typeInput;
    watch(isHiddenPassword, (value) => {
      if (!value) typeInputCal.value = "text";
      else typeInputCal.value = "password";
    });
    function changePasswordVisibility() {
      isHiddenPassword.value = !isHiddenPassword.value;
    }
    return {
      isHiddenPassword,
      typeInputCal,
      changePasswordVisibility,
    };
  },
};
</script>

<style scoped>
.form-part {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  position: relative;
  margin-top: 25px;
}
.form-part > label {
  position: absolute;
  top: 14px;
  left: 6px;
  color: rgb(175, 175, 175);
  transition: 0.25s;
  font-size: 16px;
  line-height: 16px;
  background-color: white;
  padding: 0 4px;
}
.form-part > input {
  width: 100%;
  height: 42px;
  border: 1px solid rgb(175, 175, 175);
  font-size: 16px;
  line-height: 42px;
  border-radius: 3px;
  text-indent: 10px;
  outline: none;
  background: none;
  transition: 0.25s;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
.form-part > input:hover {
  border: 1px solid black;
}

.form-part > input:focus {
  border: 1px solid cornflowerblue;
}
.form-part > input:focus + label {
  font-size: 13px;
  top: -6.5px;
  color: cornflowerblue;
}
.form-part > input:valid + label {
  font-size: 13px;
  top: -6.5px;
}
.eye-icon {
  position: absolute;
  width: 25px;
  left: calc(100% - 35px);
  opacity: 0.4;
}
.eye-icon:hover {
  cursor: pointer;
}
</style>
