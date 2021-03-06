import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';
import {useHistory} from 'react-router-dom';


const useTags = () => { // 封装一个自定义 HOOK
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '购物'},
        {id: createId(), name: '餐饮'},
        {id: createId(), name: '住房'},
        {id: createId(), name: '出行'},
        {id: createId(), name: '工资'},
        {id: createId(), name: '兼职'},
        {id: createId(), name: '奖金'},
        {id: createId(), name: '红包'}
      ];
    }
    setTags(localTags);
  }, []); //组件挂载时执行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const history = useHistory();
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    history.goBack();
  };
  const addTag = () => {
    const names = tags.map(item => item.name);
    const tagName = window.prompt('请输入新标签的名称');
    if(names.indexOf(tagName!) >= 0){
     alert('标签名重复了')
    }else if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };
  return {tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};