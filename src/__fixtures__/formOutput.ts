export default {
  formWithUrl: '<form action="/users" method="post"></form>',
  formWithoutProps: '<form action="#" method="post"></form>',
  formWithInputAndTextarea: '<form action="#" method="post"><input name="name" type="text" value="rob"><textarea name="job" cols="20" rows="40">hexlet</textarea></form>',
  formWithInputCustomAttrs: '<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"><input name="job" type="text" value="hexlet"></form>',
  formElementsWithDefaultAttrValues: '<form action="#" method="post"><textarea name="job" cols="20" rows="40">hexlet</textarea></form>',
  formElemenetsWithOverwrittenValues: '<form action="#" method="post"><textarea name="job" cols="50" rows="50">hexlet</textarea></form>',
};
