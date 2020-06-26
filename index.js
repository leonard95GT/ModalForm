"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery,
    temp = {},
    forms = {
  Form1: {
    plan: {
      value: "1",
      required: true
    },
    pessoa: {
      value: "fisica",
      required: true
    },
    razao_social: {
      required: function required() {
        return this.pessoa == "juridica";
      },
      errorMessage: "Este campo é obrigatório"
    },
    cnpj: {
      mask: '99.999.999/9999-99',
      required: function required() {
        return this.pessoa == "juridica";
      },
      errorMessage: "Precisa adicionar seu CNPJ",
      patternMessage: "Este CNPJ não é válido",
      pattern: function pattern(v) {
        return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-?\d{2}?$/.test(String(v).toLowerCase());
      }
    },
    first_name: {
      required: true,
      errorMessage: "Este campo é obrigatório"
    },
    last_name: {
      required: true,
      errorMessage: "Este campo é obrigatório"
    },
    email: {
      required: true,
      errorMessage: "Você precisa adicionar seu email",
      patternMessage: "Este e-mail não é válido",
      pattern: function pattern(v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(v).toLowerCase());
      }
    },
    cpf: {
      required: true,
      mask: '999.999.999-99',
      errorMessage: "Precisa adicionar seu CPF"
    },
    phone: {
      required: true,
      mask: '(99) 99999-9999',
      errorMessage: "Precisa adicionar seu celular"
    },
    address_zip_code: {
      required: true,
      errorMessage: "",
      patternMessage: "CEP inválido",
      mask: '99999-999',
      pattern: function pattern(v) {
        return /^[0-9]{5}-?[0-9]{3}$/.test(String(v).toLowerCase());
      }
    },
    address_street: {
      required: true,
      errorMessage: ""
    },
    address_number: {
      required: true,
      errorMessage: ""
    },
    address_complement: {
      required: false,
      errorMessage: ""
    },
    address_city: {
      required: true,
      errorMessage: ""
    },
    address_state: {
      required: true,
      errorMessage: ""
    },
    // address_district: {
    //   value: "",
    //   required: false,
    //   errorMessage: "Este campo é obrigatório"
    // },
    terms_and_conditions: {
      value: undefined,
      required: true,
      errorMessage: "Precisa aceitar os termos e condições"
    }
  }
};
var checkedIcon = "\n  <i aria-label=\"icon: check\" class=\"anticon anticon-check ant-steps-finish-icon\"><svg viewBox=\"64 64 896 896\" focusable=\"false\" class=\"\" data-icon=\"check\" width=\"1em\" height=\"1em\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z\"></path></svg></i>\n";

var debounce = function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

$(function () {
  var index = 0;
  $(document).tooltip();
  $.ajax("products.json").then(function (products) {
    var _products = products.reduce(function (r, p) {
      return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, p.id, p));
    }, {});

    $.ajax("modal.html").then(function (modal) {
      $.when($.ajax("form1.html"), $.ajax("form2.html"), $.ajax("form3.html")).done(function (_ref, _ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref, 1),
            form1 = _ref4[0];

        var _ref5 = _slicedToArray(_ref2, 1),
            form2 = _ref5[0];

        var _ref6 = _slicedToArray(_ref3, 1),
            form3 = _ref6[0];

        Object.values(_products).forEach(function (product) {
          var _product$plan_address;

          var _modal = $(modal.replace(/Modal_ID/g, product.id));

          var _form1 = $(form1),
              _form2 = $(form2),
              _form3 = $(form3);

          var _price = function _price(p) {
            return "R$ ".concat((p || 0).toFixed(2).replace('.', ','));
          };

          var _plans = product.plan_addresses.map(function (p, i) {
            return $('<option>', _objectSpread({
              value: p.id,
              text: p.name
            }, !i ? {
              selected: true
            } : {}));
          });

          _form1.find('#modal_form_plan').empty().append(_plans);

          Object.entries(forms.Form1).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                field = _ref8[0],
                mask = _ref8[1].mask;

            if (!mask) return;

            var _field = _form1.get(0)[field];

            Inputmask(mask).mask(_field);
          });
          _form2.find('.product-name').get(0).innerText = product.name;
          _form2.find('.product-detail').get(0).innerText = (_product$plan_address = product.plan_addresses[0]) === null || _product$plan_address === void 0 ? void 0 : _product$plan_address.name;
          _form2.find('.product-price:not(.price) .value').get(0).innerText = _price(product.price);
          _form2.find('.product-price.price .value').get(0).innerText = _price(product.price * 12);
          _modal.find('#DialogTitle').get(0).innerText = product.title;

          _modal.find('.ant-modal-form').append(_form1, _form2, _form3);

          temp["form_".concat(product.id)] = _modal;
          window.products = _products;
        });
      });
    });
  });
  $(document).on('click', '.ModalToggle', function (e) {
    var _productId = e.target.dataset.product;
    var _product = products[_productId];
    showModal(_product);
  });
  $(document).on('mousedown', '.ant-modal-wrap', function (e) {
    var isClose = $(e.target).parents('.ant-modal-close').length > 0;
    var isWrap = e.target.classList.contains('ant-modal-wrap');
    if (isWrap || isClose) hideModal(window.products[$('.modal-container').attr('id')]);
  });
  $(document).on('change', '.ant-radio-group .ant-radio-button-input', function (e) {
    var _group = $(e.target).closest('.ant-radio-group');

    var _element = $(e.target).closest('.ant-radio-button-wrapper');

    var _siblings = $(e.target).closest('.ant-radio-button-wrapper').siblings();

    _siblings.toggleClass('ant-radio-button-wrapper-checked').find('.ant-radio-button').toggleClass('ant-radio-button-checked').end();

    _element.toggleClass('ant-radio-button-wrapper-checked').find('.ant-radio-button').toggleClass('ant-radio-button-checked').end();

    _siblings.find('.ant-radio-button-input').attr('checked', false);

    _element.find('.ant-radio-button-input').attr('checked', true);

    if (_group.attr('id') == 'modal_form_pessoa') changeEntity(e.target.value);
  });
  $(document).on('change', '.ant-checkbox-group .ant-checkbox-input', function (e) {
    var _element = $(e.target).closest('.ant-checkbox-wrapper');

    _element.toggleClass('ant-checkbox-wrapper-checked').find('.ant-checkbox').toggleClass('ant-checkbox-checked').end();

    _element.find('.ant-checkbox-input').attr('checked', !_element.find('.ant-checkbox-input').attr('checked'));
  });
  $(document).on('click', '.ant-form .steps-action .ant-btn.ant-btn-link', prevStep);
  $(document).on('click', '.ant-form .steps-action .ant-btn.ant-btn-secondary', function (e) {
    var _validateForm = validateForm(document.Form1),
        errors = _validateForm.errors,
        data = _validateForm.data;

    if (!errors.length) temp.data = nextStep(), data;
  });
  $(document).on('click', '.ant-form .ant-btn.payment', function (e) {
    $(e.target).closest('.ant-form').find('.steps-action .ant-btn[type="submit"]').prop('disabled', false);

    var _formData = getFormData(document.Form1); // window.open('./pagar-boleto');


    console.log(_formData);
  });
  var _input = '.ant-form .ant-input[id^="modal_form"]';
  var _radio = '.ant-radio-group[id^="modal_form"] .ant-radio-button-input';
  var _checkbox = '.ant-checkbox-group[id^="modal_form"] .ant-checkbox-input';

  var _getAddressByZipCode = function functionName(zip_code) {
    var _form = document.Form1;
    var _fieldNames = ['address_city', 'address_state', 'address_street'];

    var _fields = _fieldNames.map(function (_field) {
      return _form[_field];
    });

    _fields.forEach(function (_field) {
      _field.disabled = true;
    });

    var zipCodeApi = debounce(function () {
      $.ajax("https://viacep.com.br/ws/".concat(zip_code, "/json/")).then(function (address) {
        var localidade = address.localidade,
            uf = address.uf,
            logradouro = address.logradouro;
        [localidade, uf, logradouro].forEach(function (_value, i) {
          _fields[i].disabled = false, _fields[i].value = _value;
        });
      });
    }, 300);
    zipCodeApi();
  };

  var _changePlan = function _changePlan(planId) {
    var _form2 = $(document.Form2);

    var _product = window.products[$('.modal-container').attr('id')];

    var _plan = _product.plan_addresses.find(function (v) {
      return v.id == planId;
    });

    _form2.find('.product-detail').get(0).innerText = _plan === null || _plan === void 0 ? void 0 : _plan.name;
  };

  $(document).on('keyup change', "".concat(_input, ", ").concat(_radio, ", ").concat(_checkbox), function (e) {
    var _form = document.Form1;
    var _formModel = forms[_form.name];

    var _formData = getFormData(_form);

    var _formErrors = getFormErrors(_form);

    var _hasErrors = !!Object.keys(_formErrors).length;

    $('.ant-form .steps-action .ant-btn').prop('disabled', !!_hasErrors);
    var _e$target = e.target,
        field = _e$target.name,
        value = _e$target.value;

    var _ref9 = _formErrors[field] || {},
        error = _ref9.error,
        message = _ref9.message;

    if (field === 'plan' && value && !error) _changePlan(value);
    if (field === 'address_zip_code' && value && !error) _getAddressByZipCode(value);
    toggleError(field, error, message);
  });
  $(document).on('submit', document.Form3, function (e) {
    e.preventDefault();
    hideModal(window.products[$('.modal-container').attr('id')]);
  });
});

function submit(data) {
  delete data.address_district;

  if (data.pessoa == 'fisica') {
    delete data.razao_social;
    delete data.cnpj;
    delete data.address_complement;
  }

  console.log(data);
}

function prevStep() {
  if (!$('.ant-steps-item.ant-steps-item-active').prev().length) return;
  var currentStep = $('.ant-steps-item.ant-steps-item-active');
  var currentForm = currentStep.closest('.ant-modal-body').find('.ant-form:not([hidden])');
  currentStep.removeClass('ant-steps-item-process ant-steps-item-active').addClass('ant-steps-item-wait');
  currentStep.prev().removeClass('ant-steps-item-finish').addClass('ant-steps-item-process ant-steps-item-active');
  currentStep.prev().find('.ant-steps-icon').html(currentStep.prev().index() + 1);
  currentForm.prev().attr('hidden', false);
  currentForm.attr('hidden', true);
}

function nextStep() {
  if (!$('.ant-steps-item.ant-steps-item-active').next().length) return;
  var currentStep = $('.ant-steps-item.ant-steps-item-active');
  var currentForm = currentStep.closest('.ant-modal-body').find('.ant-form:not([hidden])');
  currentStep.next().removeClass('ant-steps-item-wait').addClass('ant-steps-item-process ant-steps-item-active');
  currentStep.removeClass('ant-steps-item-process ant-steps-item-active').addClass('ant-steps-item-finish');
  currentStep.find('.ant-steps-icon').html($(checkedIcon));
  currentForm.next().attr('hidden', false);
  currentForm.attr('hidden', true);
}

function showModal(product) {
  var _modal = temp["form_".concat(product.id)];

  _modal.appendTo('body').end().fadeIn(600);
}

function hideModal(product) {
  temp["form_".concat(product.id)] = $("#".concat(product.id, ".modal-container"));
  $("#".concat(product.id, ".modal-container")).fadeOut(300, function () {
    $(this).remove();
  });
}

function changeEntity(razao_social) {
  var _form = $(document.Form1);

  var _formErrors = getFormErrors(_form);

  var _hasErrors = !!Object.keys(_formErrors).length;

  var _action = razao_social.match('juridica') ? 'show' : 'hide';

  _form.find('.steps-action .ant-btn').prop('disabled', !!_hasErrors);

  _form.find('.field_razao_social')[_action]();

  _form.find('.field_cnpj')[_action]();
}

function getFormData(form) {
  var _form = form.get && form.get(0) || form;

  var _formData = new FormData(_form).entries();

  return Object.fromEntries(_formData);
}

function getFormErrors(form) {
  var _form = form.get && form.get(0) || form;

  var _formModel = forms[_form.name];

  var _formData = getFormData(_form);

  return Object.entries(_formModel).reduce(function (errors, _ref10) {
    var _ref11 = _slicedToArray(_ref10, 1),
        _field = _ref11[0];

    var _validateField = validateField(_field, _formModel, _formData),
        field = _validateField.field,
        error = _validateField.error,
        message = _validateField.message;

    return _objectSpread(_objectSpread({}, errors), error ? _defineProperty({}, field, {
      error: error,
      message: message
    }) : {});
  }, {});
}

function validateForm(form) {
  var _form = form.get && form.get(0) || form;

  var _formModel = forms[_form.name];

  var _formData = getFormData(form);

  var _formErrors = getFormErrors(form);

  Object.entries(_formModel).forEach(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 1),
        field = _ref14[0];

    var _ref15 = _formErrors[field] || {},
        error = _ref15.error,
        message = _ref15.message;

    toggleError(field, error, message);
  });
  return {
    errors: !_formErrors.length,
    data: _formData
  };
}

function validateField(field, model, data) {
  var _model$field = model[field],
      pattern = _model$field.pattern,
      required = _model$field.required,
      errorMessage = _model$field.errorMessage,
      patternMessage = _model$field.patternMessage;

  var _pattern = typeof pattern == 'function' ? pattern(data[field]) : true;

  var _required = typeof required == 'function' ? required.bind(data)() : !!required;

  var message = !data[field] && _required ? errorMessage : _required && !_pattern ? patternMessage : undefined;
  var error = !data[field] && _required ? 'required' : _required && !_pattern ? 'pattern' : undefined;
  return {
    field: field,
    error: error,
    message: message
  };
}

function toggleError(field, error, message) {
  var _field = $('#modal_form_' + field);

  var _item = _field.closest('.ant-form-item');

  var _control = _field.closest('.ant-form-item-control');

  var _error = $('<div>', {
    "class": 'ant-form-explain',
    text: message
  });

  _item.removeClass('ant-form-item-with-help')[error ? 'addClass' : 'end']('ant-form-item-with-help');

  _control.find('.ant-form-explain').remove().end()[error ? 'append' : 'end'](_error);

  _control.removeClass('has-error')[error ? 'addClass' : 'end']('has-error');
}